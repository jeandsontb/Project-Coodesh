import fs from 'fs';
import path from 'path';

const PopulateData = async () => {
 
  const data = await fs.readFileSync('../list-articles.json'); 

  return JSON.stringify(data);
}

export default PopulateData;
