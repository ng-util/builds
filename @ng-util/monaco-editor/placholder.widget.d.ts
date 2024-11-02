export declare class PlaceholderWidget implements monaco.editor.IContentWidget {
    private readonly ID;
    private placeholder?;
    private editor;
    private node?;
    constructor(editor: monaco.editor.IStandaloneCodeEditor, placeholder?: string);
    update(text?: string | null | undefined): void;
    getId(): string;
    getDomNode(): HTMLElement;
    getPosition(): monaco.editor.IContentWidgetPosition | null;
    dispose(): void;
}
