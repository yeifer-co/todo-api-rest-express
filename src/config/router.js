import indexRouter from '@/routes/index';
import taskRouter from '@/routes/task';

export default function (app) {
  app.use('/', indexRouter);
  app.use('/task(s)?', taskRouter);
}
