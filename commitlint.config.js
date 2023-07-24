module.exports = {
  ignores: [commit => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-empty': [2, 'never'],
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新增feature功能
        'wip', // 调试开发中
        'fix', // 修复bug
        'perf', // 优化相关，比如提升性能、体验
        'merge', // 仅进行分支合并.
        'refactor', // 代码重构，没有加新功能或者修复bug
        'revert', // 回滚到上一个版本
        'style', // 代码格式修改，仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑，注意不是css修改
        'docs', // 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等
        'chore', // 改变构建流程、或者增加依赖库、工具等
        'test', // 测试用例，包括单元测试、集成测试等
        'ci', // 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
        'build', // 主要目的是修改项目构建系统(例如 glup，webpack，rollup的配置等)的提交
        'types' // 声明文件的更新
      ]
    ]
  }
};
