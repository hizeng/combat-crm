{%extends './../layout.tpl'%}

{%block css %}
<link rel="stylesheet" type="text/css" href="/stylesheets/index.css">
{%endblock%}

{%block content%}
<div class="wrapper">
    <div class ="content-section">一些图文视频的绚丽多彩的营销信息</div>
    <div class ="form-section">
        <div class ="form-title">每新增一个用户 你就离成功更近 </div>
        <div class = "form-item">
            <input id="userNameBySelf" type="text" class="form-input" placeholder="客户姓名">
        </div>
        <div class = "form-item">
            <input id="userPhoneBySelf" type="text" class="form-input" placeholder="客户电话">
        </div>
        <div class = "form-item">
            <input id="userIdBySelf"  type="text" hidden value="{{userInfo.id}}"/>

            <button id="userSubmitBySelf" class = "form-button">新增线索</button>
        </div>        
    </div>
</div>
{%endblock%}
{%block js%}
<script src="/javascripts/jquery-3.3.1.min.js"></script>
<script src="/javascripts/clue_create.js"></script>
{%endblock%}