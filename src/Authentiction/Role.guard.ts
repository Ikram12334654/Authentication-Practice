import { CanActivate, ExecutionContext } from "@nestjs/common"



export class  roleGuard implements CanActivate{
    private roles:string;
    constructor(role:string){
        this.roles=role
    }
    canActivate(context: ExecutionContext): boolean  {
      const  ctx=context.switchToHttp();
      const req: any=ctx.getRequest<Request>();
       return this.roles===req.user.role
    }

}