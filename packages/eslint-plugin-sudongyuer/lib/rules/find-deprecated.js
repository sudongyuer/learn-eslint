module.exports = {
  meta:{
    fixable:"code"
  },
  create(context) {
    return {
      CallExpression: function (node) {
        if (node.callee.name === "deprecatedSayHello") {
          context.report({
            node: node,
            message:
              "该函数已过时，请更换为SayHello",
              fix: function(fixer){
                return fixer.replaceText(node.callee,'SayHello')
              }
          });
        }
      }
    };
  }
};
