import nodeCron from "node-cron";

const NodeCron = () => {

  nodeCron.schedule('0 9 * * *', () => {
    console.log('Executando uma tarefa a cada minuto');

    
  })
}

export default NodeCron;

//0 0 * * * * Diariamente à meia-noite