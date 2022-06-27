module.exports = {
  create(context) {
    function findComments(comment){
      if(comment.value.toLowerCase().indexOf('todo')!==-1){
        context.report({
          node: comment,
          message: '速冻鱼🐟 请修复这个TODO'
        });
      }
    }

    return {
      Program(node){
        let sourceCode = context.getSourceCode()
        let comments = sourceCode.getAllComments()
        for(let comment of comments){
          findComments(comment)
        }
      }
    };
  }
};
