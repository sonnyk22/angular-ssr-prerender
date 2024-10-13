//=============================================================================
// Angular
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer, DOCUMENT } from '@angular/common';

//=============================================================================
// Imported Json Data
import packageInfo from '../../package.json';

//*****************************************************************************
@Injectable({ providedIn: 'root' })
export class AppService {

    //=================================================
    //===                 Properties                ===
    //=================================================
    appVer: string = null;

    get isBrowser(): boolean {
        return isPlatformBrowser(this._platformId);
    }

    get isServer(): boolean {
        return isPlatformServer(this._platformId);
    }  

    //=================================================
    //===                Constructor                ===
    //=================================================
    constructor(
        private _meta: Meta,
        private _title: Title,
        private _router: Router,

        @Inject(DOCUMENT) private _doc: Document,
        @Inject(PLATFORM_ID) private _platformId: Object
    ) {
        this.appVer = packageInfo.version;        
    }

    //=================================================
    //===              Public Functions             ===
    //=================================================
    setMeta(title: string, desc: string): void {
        this._title.setTitle(title);
        this._meta.updateTag({
            name: 'description',
            content: desc
        });
    }

    addSiteMeta(siteName: string, title: string, desc: string, image: string, url: string): void {
        const meta: any[] = [];

        meta.push({ property: 'author', content: 'Sonny' });

        meta.push({ property: 'og:site_name', content: siteName });
        meta.push({ property: 'og:type', content: 'website' });

        meta.push({ property: 'og:title', content: title });
        meta.push({ property: 'og:description', content: desc });

        meta.push({ property: 'og:image', content: image });
        meta.push({ property: 'og:image:type', content: 'image/jpeg' });

        meta.push({ property: 'og:url', content: url});

        this.delMeta();
        this._prcMeta(meta);
    }

    //--------------------------------------------------
    redirectTo(url: string): void {
        this._router.navigate([url]);
    }

    //================================================
    //===            Private Functions             ===
    //================================================
    delMeta(): void {
        const metaIds = [
            'og:site_name',
            'og:pubdate',
            'og:locale',
            'og:url',
            'article:publisher',
            'article:author',
            'profile:first_name',
            'profile:last_name',
            'og:title',
            'og:description',
            'og:image',
            'og:type',
            'og:image:type',
            'og:image:width',
            'og:image:height',
            'og:video',
            'og:video-type',
            'og:video-width',
            'og:video-height'
        ];

        metaIds.forEach(m => {
            const selector = `property="${m}"`;
            const tag = this._meta.getTag(selector);            
            if (tag) {
                this._meta.removeTag(selector);
            }
        });
    }

    private _prcMeta(meta: any[]): void {
        meta.forEach(m => {
            let content: string = m.content;
            if (m.id === 'og-pub-dt') {
                content = (new Date(m.content)).toString();
            }

            this._meta.addTags([
                { 
                    property: m.property, 
                    content: content
                }
            ]);
        });
    }   
}