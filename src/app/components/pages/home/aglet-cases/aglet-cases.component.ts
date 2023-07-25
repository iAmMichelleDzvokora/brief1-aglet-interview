import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-aglet-cases',
  templateUrl: './aglet-cases.component.html',
  styleUrls: ['./aglet-cases.component.scss'],
})
export class AgletCases implements OnInit {
  @ViewChild('slider') sliderRef!: ElementRef;
  scrollPercentage: number = 0;
  @HostListener('scroll', ['$event'])
  //inital progress width
  progressWidth: string = '0%';

  videos: any[] = [
    {
      thumbnail: './assets/Thumbnails/download.jpg',
      url: './assets/videos/1_Grow_up_Stage_Modul_video.mp4',
      text: 'Grow Up Stage',
      subtitle: 'Growth & Development',
    },
    {
      thumbnail: './assets/Thumbnails/download-1.jpg',
      url: './assets/videos/IAA_Makingof_8Sec_L.mp4',
      text: 'IAA Making',
      subtitle: 'Behind the Scenes',
    },
    {
      thumbnail: './assets/Thumbnails/download-2.jpg',
      url: './assets/videos/TimeToLookUpAgain_8Sec_L.mp4',
      text: 'Time to look up again',
      subtitle: 'Appreciate Life More',
    },
    {
      thumbnail: './assets/Thumbnails/download-3.jpg',
      url: './assets/videos/EasyRider_8Sec_L.mp4',
      text: 'Easy rider',
      subtitle: 'Joyful Open Road',
    },
    {
      thumbnail: './assets/Thumbnails/download-4.jpg',
      url: './assets/videos/katjes_stage-1.mp4',
      text: 'Katjes stage',
      subtitle: 'Exciting Stage Performance',
    },
    {
      thumbnail: './assets/Thumbnails/download-5.jpg',
      url: './assets/videos/risk_1.mp4',
      text: 'A risk',
      subtitle: 'Thrill of Risk',
    },
    {
      thumbnail: './assets/Thumbnails/download-6.jpg',
      url: './assets/videos/Mercedes_Leon_stage.mp4',
      text: 'Mercedes Leon',
      subtitle: 'Impressive Stage Show',
    },
    {
      thumbnail: './assets/Thumbnails/download-7.jpg',
      url: './assets/videos/stage_xmas.mp4',
      text: 'Christmas',
      subtitle: 'Joyful Festive Spirit',
    },
    {
      thumbnail: './assets/Thumbnails/download-8.jpg',
      url: './assets/videos/F1_stage-1.mp4',
      text: 'Mercedes',
      subtitle: 'Essence of Mercedes',
    },
    {
      thumbnail: './assets/Thumbnails/download-9.jpg',
      url: './assets/videos/bmw_stage_3.mp4',
      text: 'BMW',
      subtitle: 'World of BMW',
    },
    {
      thumbnail: './assets/Thumbnails/download-10.jpg',
      url: './assets/videos/eq_stage_video.mp4',
      text: 'Mercedes Interior',
      subtitle: 'Luxurious Interior Exploration',
    },
    {
      thumbnail: './assets/Thumbnails/download-11.jpg',
      url: './assets/videos/stage_g_class_dna.mp4',
      text: 'Mercedes Show room',
      subtitle: 'Mercedes Showroom DNA',
    },
  ];

  sliderWidth: string;
    // Flag to control whether to show the video or not
  showVideo: boolean;
  hoveredIndex: number | null = null;

  @ViewChildren('videoElement') videoElements: QueryList<ElementRef> | any;

   // Index of the video element currently being hovered over
  currentHoveredIndex: number | null = null;

  onHover(index: number): void {
    // Pause the previously hovered video if there was any.
    this.showVideo = true;

    if (
      this.currentHoveredIndex !== null &&
      this.currentHoveredIndex !== index
    ) {
      const prevVideo = this.videoElements?.toArray()[this.currentHoveredIndex]
        .nativeElement;
      prevVideo.pause();
    }

    // Play the video for the current hover event.
    const currentVideo = this.videoElements?.toArray()[index].nativeElement;
    currentVideo.play();

    this.currentHoveredIndex = index;
  }

  onLeave(index: number): void {
    // Pause the video when the mouse leaves the carousel item.
    const currentVideo = this.videoElements?.toArray()[index].nativeElement;
    currentVideo.pause();

    this.currentHoveredIndex = null;
  }

  constructor() {
    this.sliderWidth = '30%';
    this.showVideo = false;
  }

  ngOnInit(): void {
    this.updateSliderWidth();
  }

   // Function triggered when the carousel is scrolled
  onCarouselScroll(event: Event) {
    const target = event.target as HTMLElement | null;
    if (!target) {
      return; // Exit early if the target is null
    }

    const carousel = target as HTMLElement;
    const scrollPercentage =
      (carousel.scrollLeft / (carousel.scrollWidth - carousel.clientWidth)) *
      100;
    this.scrollPercentage = parseFloat(scrollPercentage.toFixed(0));
    // console.log(this.scrollPercentage);
    this.progressWidth = this.scrollPercentage.toString() + '%';
    console.log(this.progressWidth);
  }

  updateSliderWidth(): void {
    this.sliderWidth = window.innerWidth * 0.3 + 'px';
  }

  // Function to scroll to a specific slide (video) in the carousel
  goToSlide(video: any): void {
    const index = this.videos.indexOf(video);
    const slideWidth = this.sliderRef.nativeElement.offsetWidth;
    this.sliderRef.nativeElement.scrollLeft = index * slideWidth;
  }
}
