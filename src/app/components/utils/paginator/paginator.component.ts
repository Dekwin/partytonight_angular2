import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {Paginator} from "../../../utils/pagination/paginator";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

//apiMethod(limit, offset)
  @Input() apiMethod:Function;
  @Output() dataFinishedLoad = new EventEmitter();
  @Output() dataBeganLoad = new EventEmitter();

  private pageParamName = "page";

  constructor(private activatedRoute:ActivatedRoute, private router:Router) {

  }

  private pagerService = new Paginator();

  // pager object
  pager:any;

  pagedArrays:any[][] = [];

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params:Params) => {
      let page = parseInt(params[this.pageParamName]);
      let initialPage:number = page ? page : 1;
      if (this.pager == null) {
        this.pager = this.pagerService.getPager(initialPage, null);
      }
      this.changePage(initialPage);
      

    });
  }


  changePage(page:number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.dataBeganLoad.emit(page);
    this.pager = this.pagerService.getPager(page, this.pager.totalItems);

    if (this.pagedArrays.length < 1 ? true : !this.pagedArrays[page]) {
      this.apiMethod(this.pager.startIndex, this.pager.endIndex - this.pager.startIndex + 1).subscribe(data => {
        // get pager object from service
        if (this.pager.totalItems != data.count) {

          this.pagedArrays.length = 0;
          this.pager.totalItems = data.count;
          this.pager = this.pagerService.getPager(page, this.pager.totalItems);
          var maxPage = Math.max.apply(null, this.pager.pages);
          if (maxPage < page) {

            this.setPage(maxPage);
            return;
          }
        }
        this.pagedArrays[page] = data;

        this.dataFinishedLoad.emit(this.pagedArrays[page]);
      });

    } else {
      this.dataFinishedLoad.emit(this.pagedArrays[page]);
    }



  }

  setPage(page:number) {

    var queryParams = {}
    queryParams[this.pageParamName] = page;
    this.router.navigate([], {
      queryParams: queryParams,
      relativeTo: this.activatedRoute
    });

    //   if (page < 1 || page > this.pager.totalPages) {
    //     return;
    //   }
    //
    // //  console.log(this.activatedRoute.snapshot.queryParams);
    //
    //
    //
    //   this.dataBeganLoad.emit(page);
    //   this.pager = this.pagerService.getPager( page, this.pager.totalItems);
    //
    //   if(this.pagedArrays.length < 1 ?  true : !this.pagedArrays[page]) {
    //
    //     console.log(this.pager.endIndex)
    //
    //     this.apiMethod(this.pager.startIndex, this.pager.endIndex - this.pager.startIndex+1).subscribe(data => {
    //       // get pager object from service
    //       if(this.pager.totalItems != data.count) {
    //
    //         console.log(data)
    //         this.pagedArrays.length = 0;
    //         this.pager.totalItems = data.count;
    //         this.pager = this.pagerService.getPager(  page, this.pager.totalItems);
    //         var maxPage = Math.max.apply(null, this.pager.pages);
    //         if(maxPage < page){
    //
    //           this.setPage(maxPage);
    //           return;
    //         }
    //       }
    //       this.pagedArrays[page] = data;
    //
    //       this.dataFinishedLoad.emit(this.pagedArrays[page]);
    //     });
    //
    //   }else{
    //     this.dataFinishedLoad.emit(this.pagedArrays[page]);
    //   }

  }

}
