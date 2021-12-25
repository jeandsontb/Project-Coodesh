import { CronJob } from "cron"; 

const CronArticle = new CronJob('*/5 * * * * *', () => {
    console.log('Executando uma tarefa a cada minuto');

    const apiUrl = `https://api.spaceflightnewsapi.net/v3/articles`;
    let countInsertion = apiUrl.length

    console.log(countInsertion);
  });

export default CronArticle;


//0 0 * * * * Diariamente à meia-noite