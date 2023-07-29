/* ref https://github.com/nickpoorman/rmse */

/**
 * @description compute the error
 * @param {number} real - the real value
 * @param {number} pred - the predicted value
 * @returns {number} the error
 */
const error = (real, pred) => {
    return pred - real;
}

/**
 * @description compute the squared error
 * @param {number} real - the real value
 * @param {number} pred - the predicted value
 * @returns {number} the squared error
 */
const squaredError = (real, pred) => {
    var squaredError = [];
    for (var i = real.length - 1; i >= 0; i--) {
        squaredError.push(Math.pow(error(real[i], pred[i]), 2));
    };
    return squaredError;
}

/**
 * @description compute the absolute percentage error
 * @param {number} real - the real value
 * @param {number} pred - the predicted value
 * @returns {number} the absolute percentage error
 */
const absolutePercentageError = (real, pred) => {
    var absolutePercentageError = [];
    for (var i = real.length - 1; i >= 0; i--) {
        absolutePercentageError.push(Math.abs(error(real[i], pred[i]) / real[i]));
    };
    return absolutePercentageError;
}

/**
 * @description compute the mean
 * @param {number} val - the values
 * @returns {number} the mean
 */
const mean = (val) => {
    var total = 0;
    for (var i = val.length - 1; i >= 0; i--) {
        total += val[i];
    }
    return total / val.length;
}

/**
 * @description compute the mean square error
 */
const MSE = (real, pred) => {
    return mean(squaredError(real, pred));
}

/**
 * @description compute the root mean squared error
 */
export const RMSE = (real, pred) => {
    return Math.sqrt(MSE(real, pred));
}

/**
 * @description compute the n-RMSE
 */
 export const nRMSE = (real, pred) => {
    return Math.sqrt(MSE(real, pred))/mean(real) * 100;
}

/**
 * @description compute the mean absolute percentage error
 */
export const MAPE = (real, pred) => {
    return mean(absolutePercentageError(real, pred)) * 100;
}
