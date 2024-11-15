type MyValue = string;

(function () {
  /**
   * This comment should be removed in production.
   */
  const data: MyValue = "{{ value }}";
  console.log("inline script value", data);
})();
