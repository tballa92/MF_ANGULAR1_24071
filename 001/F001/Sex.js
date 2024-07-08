"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sex = void 0;
// exportálom az enum definíciót, hogy mások (más fájlok) import után tudják használni
// enum: felsorolás típus
var Sex;
(function (Sex) {
    Sex[Sex["MALE"] = 0] = "MALE";
    Sex[Sex["FEMALE"] = 1] = "FEMALE";
})(Sex || (exports.Sex = Sex = {}));
