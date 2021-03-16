
export default (function () {
    if (typeof window !== 'undefined') {
    const st = window.localStorage || {};
    return {
      set: (key, object) => {
        const arr = [];
        arr.push(JSON.stringify(object));
        st[key] = arr;
      },
      add: (key, object) => {
        let old = st.getItem(key);
        if (old === null) old = '';
        st.setItem(key, old + ((typeof object) === 'string' ? object : JSON.stringify(object)));
  
      },
      get: (key) => {
        if (!st[key]) {
          return null;
        }
        const value = st[key];
  
        try {
          const parsed = JSON.parse(value);
          return parsed;
        } catch (e) {
          return value;
        }
      },
      remove: (key) => {
        if (localStorage) {
          return localStorage.removeItem(key);
        }
        delete st[key];
      }
    }
}
})();
