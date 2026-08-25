# vitest 问题记录

## 错误

```
Error: Vitest cannot be imported in a CommonJS module using require(). Please use "import" instead.
```

## 原因

- vitest v4 之后变成纯 ESM 包，不再提供 CommonJS 构建
- 用 `require("vitest")` 会报错
- 与 Node 版本无关，Node 20 本身完全支持 ESM

## 解决方案

1. 如果不需要测试功能，直接移除 `require("vitest")` 或 `npm uninstall vitest`
2. 如需使用 vitest：
   - `package.json` 加 `"type": "module"`
   - 把 `require` 改为 `import`
   - 注意项目中其他 `.js` 文件也要改用 ESM 语法
