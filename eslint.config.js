import pluginJs from "@eslint/js";

export default [
    pluginJs.configs.recommended,

    {
        rules: {
            // 既存ルール
            "no-unused-vars": "warn", // 未使用の変数に警告
            "no-undef": "warn", // 未定義の変数に警告
            "no-unused-expressions": "warn", // 未使用の式に警告
            "no-constant-condition": "warn", // 定数条件式に警告
            "no-else-return": "warn", // else内でreturnを使用しない
            "no-extra-bind": "warn", // 不要なbindを使用しない
            "no-extra-label": "warn", // 不要なラベルを使用しない
            "no-extra-parens": "warn", // 不要な括弧を使用しない
            "no-extra-semi": "warn", // 不要なセミコロンを使用しない
            "no-func-assign": "warn", // 関数宣言を再代入しない
            "no-implied-eval": "warn", // 暗黙のevalを使用しない
            "no-iterator": "warn", // __iterator__を使用しない
            "no-lone-blocks": "warn", // 不要なブロックを使用しない
            "no-multi-spaces": "warn", // 不要なスペースを使用しない
            "no-multi-str": "warn", // 不要な文字列を使用しない
            "no-new-func": "warn", // Functionコンストラクタを使用しない
            
            // コードスタイルに関するルール
            semi: ["error", "always"], // セミコロンを必ず使用
            quotes: ["error", "double"], // ダブルクオートを使用
            // "indent": ["error", 2], // インデントを2スペースに統一

            // コード品質に関するルール
            "no-console": "warn", // consoleの使用に警告
            "no-debugger": "warn", // debuggerの使用に警告

            // 可読性を高めるルール
            "brace-style": ["error", "1tbs"], // 波括弧スタイルを統一
            "max-len": ["warn", { code: 120 }], // 行の長さを80文字以内に制限

            // パフォーマンス向上のためのルール
            "no-duplicate-imports": "error", // 重複インポートを禁止
            "no-var": "error", // varの使用を禁止し、let/constを強制

            // ES6機能に関するルール
            "prefer-const": "error", // 再代入されない変数はconstを使用
            "arrow-spacing": ["error", { before: true, after: true }], // アロー関数の前後にスペースを入れる
        },
    },
];
