using myapp from '../db/schema';

service RecordService {
  entity Records as projection on myapp.Records;
}