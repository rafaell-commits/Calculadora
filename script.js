const numEl = document.getElementById('num');
    const exprEl = document.getElementById('expr');
    let current = '0', prev = null, operator = null, justEvaled = false;

    const fmt = v => {
      const n = parseFloat(v);
      if (isNaN(n)) return 'Erro';
      const s = parseFloat(n.toPrecision(12)).toString();
      return s.length > 12 ? n.toExponential(6) : s;
    };

    const calc = (a, op, b) => {
      const fa = parseFloat(a), fb = parseFloat(b);
      if (op === '÷') return fb === 0 ? 'Erro' : String(fa / fb);
      if (op === '×') return String(fa * fb);
      if (op === '−') return String(fa - fb);
      if (op === '+') return String(fa + fb);
      return b;
    };

    const update = () => { numEl.textContent = fmt(current); };

    document.querySelector('.buttons').addEventListener('click', e => {
      const btn = e.target.closest('[data-a]');
      if (!btn) return;
      const a = btn.dataset.a;
      if (a === 'ac') { current = '0'; prev = null; operator = null; justEvaled = false; exprEl.textContent = ''; update(); return; }
      if (['+', '−', '×', '÷'].includes(a)) {
        if (operator && !justEvaled) { current = calc(prev, operator, current); update(); }
        prev = current; operator = a; justEvaled = false;
        exprEl.textContent = fmt(current) + ' ' + a;
        current = '0'; return;
      }
      if (a === '=') {
        if (!operator) return;
        const expr = fmt(prev) + ' ' + operator + ' ' + fmt(current) + ' =';
        current = calc(prev, operator, current);
        exprEl.textContent = expr;
        prev = null; operator = null; justEvaled = true;
        update(); return;
      }
      if (a === '+/-') { current = String(-parseFloat(current) || 0); update(); return; }
      if (a === '%') { current = String(parseFloat(current) / 100); update(); return; }
      if (justEvaled) { current = '0'; justEvaled = false; }
      if (a === '.') { if (!current.includes('.')) current += '.'; numEl.textContent = current; return; }
      if (current === '0') current = a;
      else if (current.replace('-','').replace('.','').length < 12) current += a;
      update();
    });

    document.addEventListener('keydown', e => {
      const map = { '0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9', '.':'.', ',':'.', '+':'+', '-':'−', '*':'×', '/':'÷', 'Enter':'=', '=':'=', 'Escape':'ac', '%':'%' };
      const a = map[e.key];
      if (!a) return;
      e.preventDefault();
      document.querySelector(`[data-a="${a}"]`)?.click();
    });