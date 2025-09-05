/* Generated Code (IMPORT) */
/* Source File: Fraud_p1.csv */
/* Source Path: /Users/Chris.Sammut@sas.com/My Folder/Fraud_p1.csv */
/* Code generated on: Friday, March 14, 2025, 8:49:11?PM */

%macro importfiles(dsn);;

FILENAME REFFILE "/export/canada/homes/chris.s/CRA/&dsn..csv";

PROC IMPORT DATAFILE=REFFILE
	DBMS=CSV
	OUT=casuser.&dsn.;
	GETNAMES=YES;
RUN;

%mend importfiles;
options mprint symbolgen;
%importfiles(Fraud_p1);
%importfiles(Fraud_p2);
%importfiles(Fraud_p3);
%importfiles(Fraud_p4);
%importfiles(Fraud_p5);
%importfiles(Fraud_p6);
%importfiles(Fraud_p7);

libname perm "/export/canada/homes/chris.s/CRA/";

data casuser.fraud (replace=YES drop=num_rec) / sessref="casauto" single=yes;     ;
  set casuser.fraud_p1
      casuser.fraud_p2
      casuser.fraud_p3
      casuser.fraud_p4
      casuser.fraud_p5
      casuser.fraud_p6
      casuser.fraud_p7
;

num_rec = _n_;
nameDest = substr(nameDest,1,2);
nameDest = compress(nameDest||"000999");

length recipient $500.;
     if       0 < num_rec <= 1000000 then do; recipient = "Smith E"; nameDest=compress("ES"||nameDest); end;
else if 1000000 < num_rec <= 2000000 then do; recipient = "Bradley J";nameDest=compress("JB"||nameDest); end;
else if 2000000 < num_rec <= 3000000 then do; recipient = "Thompson P";nameDest=compress("PT"||nameDest); end;
else if 3000000 < num_rec <= 4000000 then do; recipient = "Thomas D";nameDest=compress("DT"||nameDest); end;
else if 4000000 < num_rec <= 5000000 then do; recipient = "Smithson J";nameDest=compress("JK"||nameDest); end;
else if 5000000 < num_rec <= 6000000 then do; recipient = "Peterson V";nameDest=compress("VP"||nameDest); end;
                                     else do; recipient = "Peters S";nameDest=compress("SP"||nameDest); end;

label isfraud="Fraud Confirmed";
label isFlaggedFraud="Fraud Suspected";
label recipient = "Recipient of Funds";
label nameOrig = "Sender Account";
label nameDest = "Recipient Account";
label oldbalanceorg = "Pre-Txn Balance (Sender)";
label newbalanceOrig = "Post-Txn Balance (Sender)";
label oldbalanceDest = "Pre-Txn Balance (Recipient)";
label newbalanceDest = "Post-Txn Balance (Recipient)";
run;

data casuser.fraud (drop=num_rec promote=YES) / sessref="casauto" single=yes;
  set casuser.fraud;

nameOrig = substr(nameOrig,1,3);
nameOrig = compress(nameOrig||"000888");

num_rec = _n_;
length sender $500.;
     if       0 < num_rec <= 1000000 then do; sender = "Peterson V"; nameOrig=compress("VP"||nameOrig); end;
else if 1000000 < num_rec <= 2000000 then do; sender = "Smith E"; nameOrig=compress("ES"||nameOrig); end;
else if 2000000 < num_rec <= 3000000 then do; sender = "Bradley J"; nameOrig=compress("JB"||nameOrig); end;
else if 3000000 < num_rec <= 4000000 then do; sender = "Peters S"; nameOrig=compress("SP"||nameOrig); end;
else if 4000000 < num_rec <= 5000000 then do; sender = "Thompson P"; nameOrig=compress("PT"||nameOrig); end;
else if 5000000 < num_rec <= 6000000 then do; sender = "Thomas D"; nameOrig=compress("DT"||nameOrig); end;
                                     else do; sender = "Smithson J"; nameOrig=compress("JK"||nameOrig); end;

recipient = trim(recipient);
sender  = trim(sender); 

label sender = "Sender of Funds";
run;

proc casutil incaslib="casuser";
list tables;
run;
