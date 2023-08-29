namespace myapp;

entity Records {
  key ID : Integer;
  creation_time : DateTime;
  creation_by : String(45);
  last_modified : DateTime;
  last_modified_by : String(45);
  request_name : String(50);
  request_description : String(5000);
  priority : Integer;
}