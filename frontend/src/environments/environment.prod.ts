export const environment = {
  production: true
};

export interface Environment 
{
	endPoint:string;
	socket:string;

}

export const PROD: Environment = {
	endPoint:'http://sub.covetus.work:8000/',
	socket:'http://localhost:3001',
}

export const environment1: Environment= PROD;
