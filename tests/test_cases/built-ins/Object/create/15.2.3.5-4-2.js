// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.5-4-2
description: Object.create - 'Properties' is undefined
includes: [runTestCase.js]
---*/

function testcase() {

        var newObj = Object.create({}, undefined);
        return (newObj instanceof Object);
    }
runTestCase(testcase);
