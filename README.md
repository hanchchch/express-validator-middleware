# Express validator middleware
Typescript-friendly form validator middleware for express.js.


## install
```bash
$ npm install express-validator-middleware
```


## Usage
```javascript
import baseValidator, { safeUsername, safeEmail } from "express-validator-middleware";

interface SignupForm {
  username: string;
  password: string;
  email: string;
}

export const signupValidator = (req: Request, res: Response, next: NextFunction) =>
  baseValidator<SignupForm>(
    {
      username: [safeUsername],
      password: [],
      email: [safeEmail],
    },
    req,
    res,
    next
  );
```
