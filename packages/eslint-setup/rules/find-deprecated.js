module.exports = {
  create(context) {
    return {
      FunctionDeclaration: function (node) {
        if (node.id.name === "deprecatedSayHello") {
          context.report({
            node: node,
            message:
              "改函数已过时，请更换为SayHello"
          });
        }
      }
    };
  }
};
