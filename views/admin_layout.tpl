<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{title}}</title>
    <link rel="stylesheet" type="text/css" href="/stylesheets/reset.css">
    <link rel="stylesheet" type="text/css" href="/stylesheets/admin.css">
    {%block css%}
    {%endblock%}

</head>
<body>
    <div class="wrapper">
        <header class="page-header">
        {{userInfo.name}}
        <a href="/api/signout">退出</a>
        </header>
        <div class = "page-body">
            <div class="page-aside">
                <nav class="page-nav">
                    <ul>
                        {% if userInfo.role == 1%}
                        <li>
                            <a class ="page-nav-item" href="/admin/user">人员管理</a>
                        </li>
                        {% endif %}
                        <li>
                            <a class ="page-nav-item" href="/admin/clue">线索管理</a>
                        </li>
                    </ul>
                    
                </nav>    
            </div>
            <div class="page-content">
                {%block content%}
                {%endblock%}
            </div>
        </div>
        <footer class = "page-footer">极客实战 Copyright © 2019 </footer>
    </div>

    {%block js %}
    {%endblock %}

</body>
</html>