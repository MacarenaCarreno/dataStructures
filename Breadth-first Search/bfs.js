// 1. Create a Level Order Search function that takes a rootNode


const orderSearch = (root) => {
  
    if(root === null) return;
    
    let queue = []
    queue.push(root)
    
    while(queue.length > 0){
      
      let currNode = queue[0]
      
      //Left
      if(currNode.left !== null){
        queue.push(currNode.left)
      }
        //Right
        if(currNode.right !== null){
          queue.push(currNode.right)
        }
      //remove the current Node from the queue
      queue.shift()
    } 
    
}


console.log(orderSearch( 1)
