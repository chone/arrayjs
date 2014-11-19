
function testLength() {
  var a = [1, 2, 3];
  assertEquals(a.length, 3);

  a = new Array(5);
  assertEquals(a.length, 5);

  a = [1, 2, 3, 4]
  a.length = 2;
  assertEquals(a.length, 2);
}

function testIsArray() {
  assertTrue(Array.isArray([]));
  assertTrue(Array.isArray([1]));
  assertTrue(Array.isArray(new Array()));

  // Little known fact: Array.prototype itself is an array:
  assertTrue(Array.isArray(Array.prototype)); 

  assertFalse(Array.isArray());
  assertFalse(Array.isArray({}));
  assertFalse(Array.isArray(null));
  assertFalse(Array.isArray(undefined));
  assertFalse(Array.isArray(17));
  assertFalse(Array.isArray('Array'));
  assertFalse(Array.isArray(true));
  assertFalse(Array.isArray(false));
  assertFalse(Array.isArray({ __proto__: Array.prototype }));
}

function testConcat() {
  var a = [1, 2, 3];

  var b = a.concat(4);
  assertEquals(b[3], 4);
  assertFalse(a == b);

  b = a.concat(4, 5, 6)
  assertEquals(b[4], 5);

  b = a.concat([4, 5]);
  assertEquals(b[3], 4);

  b = a.concat([4, 5], [6]);
  assertEquals(b[5], 6);

  b = a.concat(4, [5, 6]);
  assertEquals(b[5], 6);

  b = a.concat();
  assertEquals(b[2], 3);
  assertFalse(a == b);
}

// TODO: test all method 
function testEvery() {

}


