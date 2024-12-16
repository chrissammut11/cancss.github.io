%let server = https://canada.viya4.sasdemo.ca;
%let jobpath = %str(/Public/ChrisS/CRA/save_data_from_VA_v3);
/* %let gitpath = %str(C:\Users\cancss\OneDrive - SAS\Documents\GitHub\cancss.github.io\DDC); */

data _null_;
file "&gitpath.\Submit_Multi_rows_and_AddNotesV3_v6.html";

	put "<!doctype html>";
	put "<html>";
	put "<head>";
	put "<title>SAS Visual Analytics Custom Data Table</title>";
	put "  <script type=""text/javascript"" src=""util/messagingUtil.js""></script>";

run;