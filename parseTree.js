class Node {
    constructor(weight,text) {
      this.weight = weight;
      this.text = text;
      this.children = [];
    }
  }
  class ResNode {
    constructor(title) {
      this.title = title;
      this.subHeaders = [];
    }
  }  
exports.parse =(arr)=>{
let result =[]
let output=[]
let pendingNode=[]
arr.forEach(element => {
   let node = new Node(element.weight,element.text)
   let outNode = new ResNode(element.text)
    if(element.weight == 1){
        result.push(node)
        output.push(outNode)
    }else if(result.length > 0){
        let root= result;
        let outres = output;
        let notFound = true;    
        while(root.length>0){
            if(root[root.length-1].weight ==element.weight-1){
                notFound = false
                root[root.length-1].children.push(node)
                outres[outres.length-1].subHeaders.push(outNode)
                break;
            } 
            root=root[root.length-1].children 
            outres=outres[outres.length-1].subHeaders
        }
        if(notFound){
            pendingNode.push(node)
        }
    }else{
        pendingNode.push(node)
    }
     
});
if(pendingNode.length>0)
return false;
/*while(result.length>0){
    result.forEach(ele =>{
    let row = new ResNode(ele.text)
    output.push(row)    
    })
    result = result.children
}*/
return output;
}