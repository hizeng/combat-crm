const PAGE = {
    init:function(){
        this.bind();
    },
    bind:function(){
        $("#userSubmitBySelf").bind('click',this.handlerSubmit);
    },
    handlerSubmit:function(){
        let name = $('#userNameBySelf').val();
        let phone = $('#userPhoneBySelf').val();

        let user_id = $('#userIdBySelf').val();

        if(!name || !phone){
            alert('请完整用户信息');
            return
        }

        $.ajax({
            url:'/api/clueBySeft',
            data:{name,phone,user_id},
            type:'POST',
            beforeSend:function(){
                console.log("aaa")
                $('#userIdBySelf').attr('disabled',true);
            },

            success:function(data){
                console.log(data);
                if(data.code === 200){
                    alert("新增用户线索成功！");
                    location.href = '/admin/clue';
                }else{
                    alert(data.message);
                }
            },
            error:function(err){
                console.log(err)
            },
            complete:function(){
                $('#userIdBySelf').attr('disabled',false);
            }
        })
    }

}

PAGE.init();