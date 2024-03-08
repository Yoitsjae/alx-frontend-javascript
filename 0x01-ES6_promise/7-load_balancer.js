/**
 * Load balancer function that returns the value of the first resolved promise
 * @param {Promise} chinaDownload - Promise for downloading from China
 * @param {Promise} USDownload - Promise for downloading from US
 * @returns {Promise} The value returned by the first resolved promise
 */
const loadBalancer = async (chinaDownload, USDownload) => {
  const result = await Promise.race([chinaDownload, USDownload]);
  return result;
};

export default loadBalancer;
