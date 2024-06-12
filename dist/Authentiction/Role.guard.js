"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleGuard = void 0;
class roleGuard {
    constructor(role) {
        this.roles = role;
    }
    canActivate(context) {
        const ctx = context.switchToHttp();
        const req = ctx.getRequest();
        return this.roles === req.user.role;
    }
}
exports.roleGuard = roleGuard;
//# sourceMappingURL=Role.guard.js.map