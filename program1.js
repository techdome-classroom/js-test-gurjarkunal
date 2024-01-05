/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s == null) {
        return true;
    }
    let ch = s.split('');
    let st = [];
    for (let i = 0; i < ch.length; i++) {
        if (ch[i] == '(' || ch[i] == '{' || ch[i] == '[') {
            st.push(ch[i]);
        } else if (ch[i] == ')' || ch[i] == '}' || ch[i] == ']') {
            if (st.length === 0) {
                return false;
            }
            let top = st.pop();
            if ((ch[i] == ')' && top != '(') ||
                (ch[i] == '}' && top != '{') ||
                (ch[i] == ']' && top != '[')) {
                return false;
            }
        }
    }
    return st.length === 0;
};

module.exports = { isValid };


