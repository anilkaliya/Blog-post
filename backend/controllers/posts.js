const Post =require('../models/posts');

exports.createPost=(req,res,next)=>{
    const url = req.protocol + "://" + req.get("host");
   const post =new Post({
    title:req.body.title,
    content:req.body.content,
    imagePath: url + "/images/" + req.file.filename,
    creator:req.userData.id
                                                    });
    post.save().then(createdPost=>

   {console.log("yes data saved");
    res.status(201).json({message:"posted successfully" });

                            });
                        };


                        
exports.getPosts=(req,res,next)=>{
    Post.find().then(data=>{
        fetchedPosts=data;
    
    res.status(201).json({message:"successfull",
    posts:fetchedPosts});
    }).catch(err=>{
        res.status(404).json({message:"Could not fecth posts"});
    })
    };

    exports.deletePosts=(req,res,next)=>{
        Post.deleteOne({ _id:req.params.id,creator:req.userData.id}).then(result=>
            {
                console.log(result);
                res.status(200).json({message:"postDeleted"});
            });
        };

        exports.getPostById=(req,res,next)=>{
            Post.findById(req.params.id).then(post=>{
              if(post){
               res.status(200).json(post);
     
              }
              else {
                  res.status(404).json({message:"post not found"});
              }
            })
        };



        exports.editPost=(req,res,next)=>{
            let imagePath = req.body.imagePath;
            if (req.file) {
              const url = req.protocol + "://" + req.get("host");
              imagePath = url + "/images/" + req.file.filename;
            }
             const post=new Post({
                _id: req.body.id,
                title:req.body.title,
                content:req.body.content,
                imagePath: imagePath,
                creator:req.userData.id
    
             });
             Post.updateOne({_id:req.params.id,creator:req.userData.id},post).then(result=>{
                 console.log("updated");
                 res.status(201).json({message:"Post updated"});
             })
         };