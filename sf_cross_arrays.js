
function cross_arrays(source1 , source2 , res1 , res2)
            {
                
                    cross_array_first( source1 , source2 , res1 );
                    cross_array_first( source2 , source1 , res2 );
                        
            }    


function  cross_array_first(source1,source2,res)
            {
                var i;
                var j;
                var result;
                
                for(i =0;i<source1.length;i++)
                    {
                        result = 0;
                        for(j = 0 ; j < source2.length  ;j++ )
                            {   
                                if(source1[i] == source2[j])
                                {
                                    result = 1; 
                                    break;
                                }
                            }
                        if(result==0)
                            res.push(source1[i]);                  
                    }   
            }
            
                
                        
            