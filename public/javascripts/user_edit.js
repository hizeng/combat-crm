const PAGE = {
  init: function() {
    this.bind();
  },
  bind: function() {
    $('#userSubmit').bind('click',this.handleSubmit);

    $('#delUserSubmit').bind('click',this.handleDelSubmit);

  },
  handleSubmit: function() {
    let id = $('#userId').val();
    let name = $('#userName').val();
    let phone = $('#userPhone').val();
    let password = $('#userPassword').val();
    let role = $('#userRole').val();
    role = Number(role)
    if(!name || !phone || !password || !role){
      alert('请输入必要参数');
      return
    }

    $.ajax({
        url: '/api/user/' + id,
        data: { name, phone, password, role },
        type: 'PUT',
        beforeSend: function() {
          $("#userSubmit").attr("disabled",true);
        },
        success: function(data) {
          if(data.code === 200){
            alert('编辑成功！')
            location.href = '/admin/user'
          }else{
            alert(data.message)
          }
        },
        error: function(err) {
          console.log(err)
        },
        complete: function() {
          $("#userSubmit").attr("disabled",false);
        }
    })
  },

  handleDelSubmit:function(){
    let id = $('#userId').val();
    $.ajax({
      url:'/api/delUser',
      data:{id},
      type:'DELETE',
      beforeSend:function(){
        $("#delUserSubmit").attr("disabled",true);
      },
      success:function(data){
        console.log(data.code);
        // if(data.code === 200){
        //   alert('删除人员成功')
        //   location.href = '/admin/user'
        // }else{
        //   alert(data.message)
        // }
      },
      error:function(err){
        console.log(err);
      },
      complete:function(){
        $("#delUserSubmit").attr("disabled",false);
      }
    })
  }
}

PAGE.init();