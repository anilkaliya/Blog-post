class node {
  constructor(data){
      this.data=data;
      this.left=null;
      this.right=null;
  }

}
class BinaryTree{
constructor(){
    this.root=null;
}
}

BinaryTree.prototype.insert=function(data){
    let newNode=new node(data);
    if(!this.root){
        this.root=newNode;
    }
    else{
        this.insertData(this.root,newNode)
    }
}

BinaryTree.prototype.insertData=function(node,newNode){
    if(newNode.data<=node.data){
        if(!node.left){
            node.left=newNode;
           
        }
        else{
            this.insertData(node.left,newNode)
        }
    }
    if(newNode.data>=node.data){
        if(!node.right){
            node.right=newNode;
           
        }
        else{
            this.insertData(node.right,newNode);
    }
}
}
BinaryTree.prototype.preorder=function(){
    console.log('preoder ______');
    this.preorderTrav(this.root);
    console.log('inorder ______');
    this.inorderTrav(this.root);
    console.log('postorder---');
    this.postorderTrav(this.root);
}

BinaryTree.prototype.preorderTrav=function(node){
    if(node){
    console.log(node.data);
    this.preorderTrav(node.left);
    this.preorderTrav(node.right);
    }

}

BinaryTree.prototype.inorderTrav=function(root){
    if(root){
        this.inorderTrav(root.left);
        console.log(root.data);
        this.inorderTrav(root.right);
    }

}
BinaryTree.prototype.postorderTrav=function(root){
    if(root){
        this.postorderTrav(root.left);
        this.postorderTrav(root.right);
        console.log(root.data);
    }
}

BinaryTree.prototype.height=function(){
    return this.heightTree(this.root);
  
}

BinaryTree.prototype.heightTree=function(root){
    if(!root){
        return 0;
    }
   leftHeight= this.heightTree(root.left);
   rightHeight=this.heightTree(root.right);
  return leftHeight>rightHeight?1+leftHeight:1+rightHeight;
 }
BinaryTree.prototype.printlevel=function(){
    ht=this.height();
    for(let h=ht;h>=0;h--){
        this.levelOrder(this.root,h);
    }
}

BinaryTree.prototype.levelOrder=function(root,level){
    if(!root){
        return;
    }
    if(level===1){
      console.log(root.data);
    }
    this.levelOrder(root.left,level-1);
    this.levelOrder(root.right,level-1);
}
BinaryTree.prototype.printlineLevel=function(){
    var m=new Map();
    this.lineLevelOrder(this.root,0,m);
   for(let value of m.values()){
       let arr=value;
       for(i in arr){
           console.log(i);
       }
   }
}

BinaryTree.prototype.lineLevelOrder=function(root,level,m){
    if(!root){
        return;
    }
    if(m.has(level)){
        m.get(level).push(root.data);
    }
    else{
        m.set(level,[root.data]);
    }
    this.lineLevelOrder(root.left,level+1,m);
    this.lineLevelOrder(root.right,level+1,m);
}


var tree=new BinaryTree();
tree.insert(20);
tree.insert(10);
tree.insert(15);
tree.insert(35);
tree.insert(14);
tree.insert(8);
tree.insert(25);
tree.insert(45);
tree.insert(9);
tree.insert(17);
tree.insert(40);
// tree.preorder();
tree.printlevel();
tree.printlineLevel();

