import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# Given data
x = np.array([1, 2, 4, 3, 5]).reshape(-1, 1)
y = np.array([1, 3, 3, 2, 5])

# Create and fit the linear regression model
model = LinearRegression()
model.fit(x, y)

# Predictions
x_new = np.array([6]).reshape(-1, 1)
y_pred = model.predict(x_new)

# Coefficients and intercept
slope = model.coef_[0]
intercept = model.intercept_

# Plotting the data and regression line
plt.scatter(x, y, color='blue', label='Actual Data')
plt.plot(x, model.predict(x), color='red', label='Regression Line')
plt.scatter(x_new, y_pred, color='green', marker='x', s=100, label='Prediction')
plt.xlabel('X')
plt.ylabel('Y')
plt.title('Simple Linear Regression')
plt.legend()
plt.show()

# Output coefficients and prediction
print(f'Slope (Coefficient): {slope}')
print(f'Intercept: {intercept}')
print(f'Predicted value for x_new: {y_pred[0]}')