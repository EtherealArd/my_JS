<%@ WebHandler Language="C#" Class="CalcHandler" %>

using System;
using System.Web;

public class CalcHandler : IHttpHandler
{

    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "text/plain";
        string operand1 = context.Request.Form["op1"];
        string operand2 = context.Request.Form["op2"];
        string operation = context.Request.Form["operation"];

        int op1;
        int op2;

        if (int.TryParse(operand1, out op1) && int.TryParse(operand2, out op2))
        {
            int result =  Calculate(op1, op2, Char.Parse(operation));
            context.Response.Write(result);
        }


    }

    public int Calculate(int op1, int op2, char operation)
    {
        switch (operation)
        {
            case '+':
                return op1 + op2;
                break;
            case '-':
                return op1 - op2;
                break;

            case '*':
                return op1 * op2;
                break;

            case '/':
                return op1 / op2;
                break;

            default:
                return 0;

        }
    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

}