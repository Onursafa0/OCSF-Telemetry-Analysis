import { OcsfEvent } from '../base/ocsf-event.model';
import { KbArticle } from '../objects/kb-article.model';
import { OcsfCategoryUid, OcsfClassUid } from '../enums';
export class PatchState extends OcsfEvent {
    kb_article_list?: KbArticle[];
    constructor(p?: Partial<PatchState>) {
        super(OcsfClassUid.PATCH_STATE);
        this.category_uid = OcsfCategoryUid.DISCOVERY;
        this.category_name = 'Discovery';
        Object.assign(this, p);
    }
}