%let server = https://canada.viya4.sasdemo.ca;
%let jobpath = %str(/Public/ChrisS/CRA/save_data_from_VA_v3);
%let gitpath = %str(/export/canada/homes/chris.s/GitHub_Projects/DDC); 

data _null_;
file "&gitpath./ZZZ.html";

	put "<!doctype html>";
	put "<html>";
	put "<head>";
	put "<title>SAS Visual Analytics Custom Data Table</title>";
	put "  <script type=""text/javascript"" src=""util/messagingUtil.js""></script>";

run;
