import { ElementRef, OnChanges, SimpleChange, AfterViewInit } from '@angular/core';
export declare class QRCodeComponent implements OnChanges, AfterViewInit {
    el: ElementRef;
    private platformId;
    colordark: string;
    colorlight: string;
    level: string;
    hidetitle: boolean;
    qrdata: string;
    size: number;
    usesvg: boolean;
    qrcode: any;
    constructor(el: ElementRef, platformId: Object);
    ngAfterViewInit(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    protected isValidQrCodeText: (data: string) => boolean;
}
