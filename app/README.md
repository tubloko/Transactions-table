In order to starts you need:
1) npm install
2) npm install -g json-server
3) json-server --watch db.json --port 3001
4) npm start

In the application, import the data.csv file, (there is a file in transaction-test folder)
the file can be 
sorted / 
deleted transaction elements / 
change the transaction status, 
after all export the already modified file.

json-server is used as a fake server.

It is impossible to delete or change an 
element there as a separate one, because the data is 
written in the whole block and after the request it gives the whole block.
By connecting a real server to the application, everything can be quickly set up.


'react-file-reader' uses for import file
'react-csv' uses for export file

project structure:
srs--
    --actionCreators
    --API
    --constants
    --reducers
    --sagas
    --routers
    --selectors
    --utils
    --pages--
         --page--
            --components
            --page
         --page--
            --page
    --App
    --index        