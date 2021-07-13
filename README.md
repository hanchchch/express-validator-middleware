# Express validator ts
Typescript-friendly form validator middleware for express.js.


## install
```bash
$ npm install express-validator-ts
```


## Usage
```javascript
import baseValidator, { safeUsername, safeEmail } from "express-validator-ts";

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
