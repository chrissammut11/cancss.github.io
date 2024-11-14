
# Import the pandas library
import pandas as pd

# Load the CSV file into a DataFrame
df = pd.read_csv('data.csv')

# Display the first few rows of the DataFrame
print("First 5 rows of the data:")
print(df.head())

# Get some basic statistics on numerical columns
print("\nBasic statistics:")
print(df.describe())

# Display the column names
print("\nColumn names:")
print(df.columns)

# Check for any missing values
print("\nMissing values in each column:")
print(df.isnull().sum())

# Group data by a specific column (e.g., 'Age') and calculate the mean for each group
# Modify 'Age' to any column you want to analyze
pri
