import { AppService } from './app.service';
import { authService } from './Authentiction/Auth.service';
export declare class AppController {
    private readonly appService;
    private readonly authservice;
    constructor(appService: AppService, authservice: authService);
    login(req: any): string;
}
