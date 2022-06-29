module.exports = {
  create(context) {
    const options = context.options

    function findComments(comment){
      for(let option of options){
        if(comment.value.toLowerCase().includes(option)){
          context.report({
            node: comment,
            message: `速冻鱼🐟 请修复这个${option} 它不能被使用`
          });
        }
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
