import { CanActivate, ExecutionContext } from "@nestjs/common";
export declare class roleGuard implements CanActivate {
    private roles;
    constructor(role: string);
    canActivate(context: ExecutionContext): boolean;
}
