import { Component, Element, h, Prop, Watch } from '@stencil/core';
import { Color } from '../../../interface';

@Component({
    tag: 'hive-ui-progress-ring',
    styleUrl: 'progress-ring.scss',
    shadow: true
})
export class ProgressRing {

    @Element() el!: Element;
    /**
     * The stroke width of the progress ring.
     */
    @Prop() stroke = 2.5;
    /**
     * The progress percentage to whole for the progress ring.
     */
    @Prop({ mutable: true }) progress = 0;
    /**
     * The radius of the ring in pixels.
     */
    @Prop() radius = 20;
    /**
     * The foreground color of the ring as it fills.
     */
    @Prop() color: Color = 'white';

    @Prop({ mutable: true }) circleClass: string;

    @Watch('progress')
    progressChange(percent: number) {
        if (percent < 100) {
            this.circleClass = 'active';
        } else {
            setTimeout(() => {
                this.circleClass = 'complete';
            }, 350);
        }
    }

    get normalizedRadius() {
        return this.radius - this.stroke * 2;
    }

    get circumference() {
        return this.normalizedRadius * 2 * Math.PI;
    }

    get strokeDashoffset() {
        return (this.circumference - this.progress / 100 * this.circumference).toString();
    }

    render() {
        const { stroke, radius, normalizedRadius, circumference, strokeDashoffset, circleClass, color } = this;
        return (
            <svg
                height={radius * 2}
                width={radius * 2}
            >
                <circle class={circleClass}
                    stroke={`var(--color-${color})`}
                    stroke-dasharray={circumference + ' ' + circumference}
                    style={{
                        strokeDashoffset
                    }}
                    stroke-width={stroke}
                    fill='transparent'
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
            </svg>
        );
    }

}
