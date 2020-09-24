<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jsonDetail.jsp</title>
</head>
<body>
    <% 
        request.setCharacterEncoding("UTF-8");
        String id = request.getParameter("id");
        String firstName = request.getParameter("first_name");
        String lastName = request.getParameter("last_name");
        String email = request.getParameter("email");
        String gender = request.getParameter("gender");

    %>

    <div style="background-color: azure; border:1px dotted red;">
        <전송된 정보>
        <form action="jsonUpdate.jsp" method="POST">
            ID:<input type="text" name="id" value="<%=id%>"><br>
            FirstName:<input type="text" name="first_name" value="<%=firstName%>"><br>
            LastName:<input type="text" name="last_name" value="<%=lastName%>"><br>
            Email:<input type="text" name="email" value="<%=email%>"><br>
            Gender:<input type="text" name="gender" value="<%=gender%>"><br>
            <input type = "submit" value="전송">
            <input type = "reset" value="취소">
        </form>

    </div>
  
</body>
</html>
